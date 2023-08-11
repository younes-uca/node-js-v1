package ${config.domain}.${config.groupId}.${config.projectName}.zynerator.security.${config.jwt};

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collector;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import ${config.domain}.${config.groupId}.${config.projectName}.${config.mainClass};
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.security.${config.common}.${config.securityParams};
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.security.${config.service}.${config.serviceFacade}.${config.userService};
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.security.${config.bean}.User;


public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            User myUser = new ObjectMapper().readValue(request.getInputStream(), User.class);
            System.out.println(myUser.getUsername());
            System.out.println(myUser.getPassword());
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(myUser.getUsername(),myUser.getPassword()));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                            FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user = (User) authResult.getPrincipal();

        ${config.userService} userService = ${config.mainClass}.getCtx().getBean(${config.userService}.class);

        User myUser = userService.findByUsernameWithRoles(user.getUsername());

        Collection<String> roles = new ArrayList<>();
        if (myUser.getAuthorities() != null) {
            myUser.getAuthorities().forEach(a->roles.add(a.getAuthority()));
        }
        Boolean passwordChanged = myUser.isPasswordChanged();
        if (passwordChanged == null) {
            passwordChanged=Boolean.FALSE;
        }
    <#if config.groupId == "enova">
        String[] categorieRoles = user.getCategorieRoles().stream().toArray(String[]::new);
        String[] rolesByDomain = user.getRolesByDomain().stream().toArray(String[]::new);
    </#if>
        String jwt= JWT.create()
                .withIssuer(request.getRequestURI())
                .withSubject(user.getUsername())
                .withSubject(user.getPrenom())
                .withSubject(user.getNom())
                .withArrayClaim("roles",roles.toArray(new String[roles.size()]))
                .withExpiresAt(new Date(System.currentTimeMillis()+ ${config.securityParams}.EXPIRATION))
                .withClaim("passwordChanged",passwordChanged)
    <#if config.groupId == "enova">
                .withArrayClaim("categorieRoles", categorieRoles)
                .withArrayClaim("rolesByDomain",rolesByDomain)
    </#if>
                .sign(Algorithm.HMAC256(${config.securityParams}.SECRET));
    <#if config.groupId == "enova">
                response.addHeader(${config.securityParams}.JWT_HEADER_NAME,jwt);
    <#else>
                response.addHeader(${config.securityParams}.JWT_HEADER_NAME,${config.securityParams}.HEADER_PREFIX+jwt);
    </#if>
        System.out.println(jwt);
    }

}

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.6.RELEASE</version>
        <relativePath/>
    </parent>
    <groupId>${config.domain}.${config.groupId}</groupId>
    <artifactId>${config.projectName}</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>${config.projectName}</name>
    <description>Demo project generated</description>

    <properties>
        <java.version>1.8</java.version>
        <spring-cloud.version>Greenwich.SR2</spring-cloud.version>
        <itext.version>4.2.1</itext.version>
        <poi.version>4.1.2</poi.version>
        <jjwt.version>0.10.5</jjwt.version>
        <zalando.version>0.23.0</zalando.version>
        <commons-io.version>2.4</commons-io.version>
        <commons-fileupload.version>1.4</commons-fileupload.version>
        <velocity-engine-core.version>2.2</velocity-engine-core.version>
        <itextpdf.version>5.5.11</itextpdf.version>
        <itextpdf-xmlworker.version>5.5.10</itextpdf-xmlworker.version>
        <minio.version>8.5.2</minio.version>
        <okhttp3.version>4.10.0</okhttp3.version>
        <ocr.version>3.4.0</ocr.version>
        <openapi.version>1.6.9</openapi.version>
    </properties>

    <dependencies>


        <dependency>
            <groupId>org.apache.velocity</groupId>
            <artifactId>velocity-engine-core</artifactId>
            <version><#noparse>${velocity-engine-core.version}</#noparse></version>
        </dependency>

        <dependency>
            <groupId>io.minio</groupId>
            <artifactId>minio</artifactId>
            <version><#noparse>${minio.version}</#noparse></version>
        </dependency>

        <dependency>
            <groupId>com.squareup.okhttp3</groupId>
            <artifactId>okhttp</artifactId>
            <version><#noparse>${okhttp3.version}</#noparse></version> <!-- or an appropriate version -->
        </dependency>

        <dependency>
            <groupId>net.sourceforge.tess4j</groupId>
            <artifactId>tess4j</artifactId>
            <version><#noparse>${ocr.version}</#noparse></version>
        </dependency>

        <dependency>
            <groupId>com.itextpdf</groupId>
            <artifactId>itextpdf</artifactId>
            <version><#noparse>${itextpdf.version}</#noparse></version>
        </dependency>
        <dependency>
            <groupId>com.itextpdf.tool</groupId>
            <artifactId>xmlworker</artifactId>
            <version><#noparse>${itextpdf-xmlworker.version}</#noparse></version>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>

        <#if config.swagger>
            <dependency>
                <groupId>org.springdoc</groupId>
                <artifactId>springdoc-openapi-ui</artifactId>
                <version><#noparse>${openapi.version}</#noparse></version>
            </dependency>
        </#if>

        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.auth0</groupId>
            <artifactId>java-jwt</artifactId>
            <version>3.18.1</version>
        </dependency>

       <#-- <dependency>
            <groupId>net.logstash.logback</groupId>
            <artifactId>logstash-logback-encoder</artifactId>
            <version>7.2</version>
        </dependency>-->

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>io.micrometer</groupId>
            <artifactId>micrometer-registry-prometheus</artifactId>
            <version><#noparse>${micrometer.version}</#noparse></version>
        </dependency>

        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.32</version>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>com.lowagie</groupId>
            <artifactId>itext</artifactId>
            <version><#noparse>${itext.version}</#noparse></version>
        </dependency>




        <dependency>
            <groupId>org.apache.poi</groupId>
            <artifactId>poi</artifactId>
            <version><#noparse>${poi.version}</#noparse></version>
        </dependency>


        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <mainClass>
                        // TODO insert nain class
                    </mainClass>
                    <layout>JAR</layout>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>14</source>
                    <target>14</target>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>

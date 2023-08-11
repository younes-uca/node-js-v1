package  ${config.domain}.${config.groupId}.${config.projectName}.${config.ws}.${config.converter};

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
<#if pojo.hasList>
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.util.ListUtil;
</#if>

<#list pojo.fieldsGeneric as fieldGeneric>
<#if (fieldGeneric.pojo.name)?? && pojo.name != fieldGeneric.pojo.name>
<#if fieldGeneric.pojo.msExterne == false && fieldGeneric.eligibleForStackOverFlow == true>
import ${config.domain}.${config.groupId}.${config.projectName}.bean.core.${fieldGeneric.pojo.name};
</#if>
</#if>
</#list>

<#if config.groupId == "enova">
import java.util.stream.Collectors;
    <#list pojo.fields as field>
        <#if field.list && field.association>
import ${config.domain}.${config.groupId}.${config.projectName}.bean.core.${field.typeAsPojo.name};
         </#if>
    </#list>
</#if>
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.util.StringUtil;
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.converter.AbstractConverter<#if pojo.enhanced>Enhanced</#if>;
import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.util.DateUtil;
import ${config.domain}.${config.groupId}.${config.projectName}.${config.bean}.history.${pojo.name}History;
import ${config.domain}.${config.groupId}.${config.projectName}.${config.bean}.core.${pojo.name};
import ${config.domain}.${config.groupId}.${config.projectName}.ws.dto.${pojo.name}Dto;

@Component
public class ${pojo.name}Converter extends AbstractConverter<#if pojo.enhanced>Enhanced</#if><${pojo.name}, ${pojo.name}Dto, ${pojo.name}History> {

<#if pojo.dependencies??>
    <#list pojo.dependencies as dependency>
        <#if dependency?? && dependency.name?? && dependency.msExterne == false>
    @Autowired
    ${pojo.attributeVisibility} ${dependency.name}Converter ${dependency.name?uncap_first}Converter ;
        </#if>
    </#list>
</#if>
<#list pojo.fieldsGeneric as fieldGeneric>
    ${pojo.attributeVisibility} boolean ${fieldGeneric.name};
</#list>
<#list pojo.fields as fieldList>
    <#if fieldList.list == true>
    ${pojo.attributeVisibility} boolean ${fieldList.name};
    </#if>
</#list>

    public  ${pojo.name}Converter(){
        super(${pojo.name}.class, ${pojo.name}Dto.class, ${pojo.name}History.class);
        <#if pojo.hasList || pojo.hasGeneric>
        init(true);
        </#if>
    }

    @Override
    public ${pojo.name} toItem(${pojo.name}Dto dto) {
        if (dto == null) {
            return null;
        } else {
        ${pojo.name} item = <#if pojo.subEntity>super.toItem(dto);<#else>new ${pojo.name}();</#if>
        <#list pojo.fieldsSimple as fieldSimple>
            <#if fieldSimple.dateTime>
            if(StringUtil.isNotEmpty(dto.get${fieldSimple.name?cap_first}()))
                item.set${fieldSimple.name?cap_first}(DateUtil.stringEnToDate(dto.get${fieldSimple.name?cap_first}()));
            <#elseif fieldSimple.bool && pojo.actor && fieldSimple.boolFrameWork>
            item.set${fieldSimple.name?cap_first}(dto.get${fieldSimple.name?cap_first}());
            <#elseif fieldSimple.bool>
            if(dto.get${fieldSimple.name?cap_first}() != null)
                item.set${fieldSimple.name?cap_first}(dto.get${fieldSimple.name?cap_first}());
            <#else>
            if(StringUtil.isNotEmpty(dto.get${fieldSimple.name?cap_first}()))
                item.set${fieldSimple.name?cap_first}(dto.get${fieldSimple.name?cap_first}());
            </#if>
        </#list>
        <#list pojo.fieldsGeneric as fieldGeneric>
            <#if (fieldGeneric.pojo.name)?? && pojo.name != fieldGeneric.pojo.name>
                <#if fieldGeneric.pojo.msExterne == false && fieldGeneric.eligibleForStackOverFlow == true>
            if(dto.get${fieldGeneric.name?cap_first}() != null && dto.get${fieldGeneric.name?cap_first}().get${fieldGeneric.pojo.id.name?cap_first}() != null){
                item.set${fieldGeneric.name?cap_first}(new ${fieldGeneric.typeAsPojo.name}());
                item.get${fieldGeneric.name?cap_first}().set${fieldGeneric.pojo.id.name?cap_first}(dto.get${fieldGeneric.name?cap_first}().get${fieldGeneric.pojo.id.name?cap_first}());
            }
            <#elseif fieldGeneric.pojo.msExterne == false && fieldGeneric.eligibleForStackOverFlow == false>
            if(this.${fieldGeneric.name} && dto.get${fieldGeneric.name?cap_first}()!=null &&  dto.get${fieldGeneric.name?cap_first}().getId() != null)
                item.set${fieldGeneric.name?cap_first}(${fieldGeneric.type.simpleName?uncap_first}Converter.toItem(dto.get${fieldGeneric.name?cap_first}())) ;
                <#else>
            if(this.${fieldGeneric.name} && dto.get${fieldGeneric.name?cap_first}()!=null &&  dto.get${fieldGeneric.name?cap_first}().getId() != null)
                item.set${fieldGeneric.name?cap_first}(dto.get${fieldGeneric.name?cap_first}()) ;
                </#if>
            <#else>
            if(this.${fieldGeneric.name} && dto.get${fieldGeneric.name?cap_first}()!=null)
                item.set${fieldGeneric.name?cap_first}(toItem(dto.get${fieldGeneric.name?cap_first}())) ;
            </#if>

        </#list>

        <#list pojo.fields as fieldList>
            <#if fieldList.list>
            if(this.${fieldList.name} && ListUtil.isNotEmpty(dto.get${fieldList.name?cap_first}()))
                <#if pojo.name != fieldList.pojo.name>
                item.set${fieldList.name?cap_first}(${fieldList.type.simpleName?uncap_first}Converter.toItem(dto.get${fieldList.name?cap_first}()));
                <#else>
                item.set${fieldList.name?cap_first}(toItem(dto.get${fieldList.name?cap_first}()));
                </#if>
            </#if>
        </#list>

<#if config.groupId == "enova">
<#list pojo.fields as field>
<#if field.list && field.association>
    if( ListUtil.isNotEmpty(dto.get${field.fieldOfAssociation.name?cap_first}()))
        item.set${field.name?cap_first}(${field.fieldOfAssociation.typeAsPojo.name?uncap_first}Converter.toItem(dto.get${field.fieldOfAssociation.name?cap_first}()).stream().map(e-> new ${field.typeAsPojo.name}(e)).collect(Collectors.toList()));
</#if>
</#list>
</#if>
        <#if pojo.enhanced>
        convertRefentielAttribute(dto, item);
        </#if>
        return item;
        }
    }

    @Override
    public ${pojo.name}Dto toDto(${pojo.name} item) {
        if (item == null) {
            return null;
        } else {
            ${pojo.name}Dto dto = <#if pojo.subEntity>super.toDto(item);<#else>new ${pojo.name}Dto();</#if>
    <#list pojo.fieldsSimple as fieldSimple>
         <#if fieldSimple.dateTime >
            if(item.get${fieldSimple.name?cap_first}()!=null)
                dto.set${fieldSimple.name?cap_first}(DateUtil.dateTimeToString(item.get${fieldSimple.name?cap_first}()));
        <#elseif fieldSimple.bool && !fieldSimple.boolFrameWork>
                dto.set${fieldSimple.name?cap_first}(item.get${fieldSimple.name?cap_first}());
        <#else>
            if(StringUtil.isNotEmpty(item.get${fieldSimple.name?cap_first}()))
                dto.set${fieldSimple.name?cap_first}(item.get${fieldSimple.name?cap_first}());
        </#if>
    </#list>
    <#list pojo.fieldsGeneric as fieldGeneric>
        if(this.${fieldGeneric.name} && item.get${fieldGeneric.name?cap_first}()!=null) {
        <#if (fieldGeneric.pojo.name)?? && pojo.name != fieldGeneric.pojo.name>
            <#list fieldGeneric.typeAsPojo.fields as fieldsGenericOfThisField>
                <#if fieldsGenericOfThisField.generic && fieldsGenericOfThisField.typeAsPojo.name == pojo.name && fieldGeneric.pojo.msExterne == false>
            ${fieldGeneric.type.simpleName?uncap_first}Converter.set${fieldsGenericOfThisField.name?cap_first}(false);
                </#if>
            </#list>
            <#if fieldGeneric.pojo.msExterne == false>
            dto.set${fieldGeneric.name?cap_first}(${fieldGeneric.type.simpleName?uncap_first}Converter.toDto(item.get${fieldGeneric.name?cap_first}())) ;
            <#else>
            dto.set${fieldGeneric.name?cap_first}(item.get${fieldGeneric.name?cap_first}()) ;
            </#if>
            <#list fieldGeneric.typeAsPojo.fields as fieldsGenericOfThisField>
                <#if fieldsGenericOfThisField.generic && fieldsGenericOfThisField.typeAsPojo.name == pojo.name  && fieldGeneric.pojo.msExterne == false>
            ${fieldGeneric.type.simpleName?uncap_first}Converter.set${fieldsGenericOfThisField.name?cap_first}(true);
                </#if>
            </#list>
        <#elseif (fieldGeneric.pojo.fields)??>
            <#list fieldGeneric.typeAsPojo.fields as fieldsGenericOfThisField>
                <#if fieldsGenericOfThisField.generic && fieldsGenericOfThisField.typeAsPojo.name == pojo.name>
            this.set${fieldsGenericOfThisField.name?cap_first}(false);
                </#if>
            </#list>
            dto.set${fieldGeneric.name?cap_first}(toDto(item.get${fieldGeneric.name?cap_first}())) ;
            <#list fieldGeneric.typeAsPojo.fields as fieldsGenericOfThisField>
                <#if fieldsGenericOfThisField.generic && fieldsGenericOfThisField.typeAsPojo.name == pojo.name>
            this.set${fieldsGenericOfThisField.name?cap_first}(true);
                </#if>
            </#list>
        </#if>
        }
    </#list>
    <#list pojo.fields as fieldList>
        <#if fieldList.list == true>
        if(this.${fieldList.name} && ListUtil.isNotEmpty(item.get${fieldList.name?cap_first}())){
            <#if (pojo.hasList || pojo.hasGeneric)  && pojo.msExterne == false>
            ${fieldList.type.simpleName?uncap_first}Converter.init(true);
            </#if>
            <#if  pojo.msExterne == false>
            ${fieldList.type.simpleName?uncap_first}Converter.set${pojo.name?cap_first}(false);
            dto.set${fieldList.name?cap_first}(${fieldList.type.simpleName?uncap_first}Converter.toDto(item.get${fieldList.name?cap_first}()));
            ${fieldList.type.simpleName?uncap_first}Converter.set${pojo.name?cap_first}(true);
            <#else>
            dto.set${fieldList.name?cap_first}(item.get${fieldList.name?cap_first}());
            </#if>

        }
        </#if>
    </#list>


<#if config.groupId == "enova">
    <#list pojo.fields as field>
        <#if field.list && field.association>
            if( ListUtil.isNotEmpty(item.get${field.name?cap_first}()))
                dto.set${field.fieldOfAssociation.name?cap_first}(item.get${field.name?cap_first}().stream().map(e-> ${field.fieldOfAssociation.typeAsPojo.name?uncap_first}Converter.toDto(e.get${field.fieldOfAssociation.typeAsPojo.name}())).collect(Collectors.toList()));
        </#if>
    </#list>
</#if>
<#if pojo.enhanced>
        convertRefentielAttribute(item, dto);
</#if>
        return dto;
        }
    }

    <#if pojo.hasList>
    public void initList(boolean value) {
        <#if pojo.subEntity>
        super.initList(value);
        </#if>
        <#list pojo.fields as fieldList>
            <#if fieldList.list == true>
        this.${fieldList.name} = value;
            </#if>
        </#list>
    }
    </#if>

    public void initObject(boolean value) {
        <#if pojo.subEntity>
        super.initObject(value);
        </#if>
        <#list pojo.fieldsGeneric as fieldGeneric>
        this.${fieldGeneric.name} = value;
        </#list>
    }


<#if pojo.dependencies??>
    <#list pojo.dependencies as dependency>
        <#if dependency?? && dependency.name?? && dependency.msExterne == false>
    public ${dependency.name}Converter get${dependency.name}Converter(){
        return this.${dependency.name?uncap_first}Converter;
    }
    public void set${dependency.name}Converter(${dependency.name}Converter ${dependency.name?uncap_first}Converter ){
        this.${dependency.name?uncap_first}Converter = ${dependency.name?uncap_first}Converter;
    }
        </#if>
</#list>
</#if>
    <#list pojo.fieldsGeneric as fieldGeneric>
    public boolean  is${fieldGeneric.name?cap_first}(){
        return this.${fieldGeneric.name};
    }
    public void  set${fieldGeneric.name?cap_first}(boolean ${fieldGeneric.name}){
        this.${fieldGeneric.name} = ${fieldGeneric.name};
    }
    </#list>
    <#list pojo.fields as fieldList>
        <#if fieldList.list == true>
    public boolean  is${fieldList.name?cap_first}(){
        return this.${fieldList.name} ;
    }
    public void  set${fieldList.name?cap_first}(boolean ${fieldList.name} ){
        this.${fieldList.name}  = ${fieldList.name} ;
    }
        </#if>
    </#list>
}

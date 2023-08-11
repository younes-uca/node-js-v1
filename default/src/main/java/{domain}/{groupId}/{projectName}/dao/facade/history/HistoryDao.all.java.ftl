package ${config.domain}.${config.groupId}.${config.projectName}.${config.dao}.facade.history;

import ${config.domain}.${config.groupId}.${config.projectName}.zynerator.repository.AbstractHistoryRepository;
import ${config.domain}.${config.groupId}.${config.projectName}.${config.bean}.history.${pojo.name}History;
import org.springframework.stereotype.Repository;

@Repository
public interface ${pojo.name}HistoryDao extends AbstractHistoryRepository<${pojo.name}History,${pojo.id.type.simpleName}> {

}

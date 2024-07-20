package lk.ijse.dep11.ems.mapper;


import lk.ijse.dep11.ems.dto.EmployeeDTO;
import lk.ijse.dep11.ems.entity.Employee;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EmployeeMapper {
    Employee requestDtoTOEntity(EmployeeDTO employeeDTO);

    EmployeeDTO entityToDto(Employee employee2);

    List<EmployeeDTO> entityListToDtoLst(List<Employee> employeeList);
}

package lk.ijse.dep11.ems.service;

import lk.ijse.dep11.ems.dto.EmployeeDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(long employeeId);

    List<EmployeeDTO> getAllEmployee();

    EmployeeDTO updateEmployee(long employeeId,EmployeeDTO employeeDTO);

    EmployeeDTO deleteEmployeeById(long employeeId);
}

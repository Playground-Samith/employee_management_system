package lk.ijse.dep11.ems.service.serviceImpl;

import lk.ijse.dep11.ems.dto.EmployeeDTO;
import lk.ijse.dep11.ems.entity.Employee;
import lk.ijse.dep11.ems.exception.ConflictException;
import lk.ijse.dep11.ems.exception.NotFoundException;
import lk.ijse.dep11.ems.mapper.EmployeeMapper;
import lk.ijse.dep11.ems.repository.EmployeeRepository;
import lk.ijse.dep11.ems.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeMapper employeeMapper;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee=employeeMapper.requestDtoTOEntity(employeeDTO);

        if(!employeeRepository.existsByEmail(employee.getEmail())) {
           Employee employee1=employeeRepository.save(employee);

          Employee employee2= employeeRepository.getReferenceById(employee1.getEmployeeId());
          EmployeeDTO employeeDTO1=employeeMapper.entityToDto(employee2);
          return employeeDTO1;
        }else{
            throw  new ConflictException("Employee already exists with the given email.");
        }
    }

    @Override
    public EmployeeDTO getEmployeeById(long employeeId) {
        if(employeeRepository.existsById(employeeId)){
            Employee employee=employeeRepository.getReferenceById(employeeId);
            EmployeeDTO employeeDTO=employeeMapper.entityToDto(employee);
            return employeeDTO;
        }else {
            throw new NotFoundException("There is no employee found with the given employee id.");
        }

    }

    @Override
    public List<EmployeeDTO> getAllEmployee() {
        List<Employee> employeeList=employeeRepository.findAll();
        if(employeeList.size() > 0){
            List<EmployeeDTO> employeeDTOList=employeeMapper.entityListToDtoLst(employeeList);
            return employeeDTOList;
        }else{
            throw new NotFoundException("There is no data in the database.");
        }
    }

    @Override
    public EmployeeDTO updateEmployee(long employeeId,EmployeeDTO employeeDTO) {
        Employee employee=employeeRepository.getReferenceById(employeeId);

        if(employee == null){
            throw new NotFoundException("There is no employee found with the given employee id.");
        }

        String newEmail=employeeDTO.getEmail();

        Employee existEmployeeWithEmail=employeeRepository.findByEmail(newEmail);

        if(existEmployeeWithEmail !=null && existEmployeeWithEmail.getEmployeeId() != employeeId){
            throw new ConflictException("The given email already exists with another employee.");
        }

        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());

        Employee updatedEmployee=employeeRepository.save(employee);

        return employeeMapper.entityToDto(updatedEmployee);

    }
}

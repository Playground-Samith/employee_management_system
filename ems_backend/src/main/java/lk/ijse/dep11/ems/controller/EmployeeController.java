package lk.ijse.dep11.ems.controller;

import lk.ijse.dep11.ems.dto.EmployeeDTO;
import lk.ijse.dep11.ems.service.EmployeeService;
import lk.ijse.dep11.ems.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/save")
    public ResponseEntity<StandardResponse> createEmployee(@RequestBody EmployeeDTO employeeDTO){

        EmployeeDTO employeeDTO1=employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(new StandardResponse(201,"saved",employeeDTO1), HttpStatus.CREATED);

    }

    @GetMapping("{id}")

    public ResponseEntity<StandardResponse> getEmployeeById(@PathVariable (value = "id")long employeeId){
        EmployeeDTO employeeDTO=employeeService.getEmployeeById(employeeId);
        return new ResponseEntity<>(new StandardResponse(200,"success",employeeDTO),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<StandardResponse> getAllEmployee(){
        List<EmployeeDTO>employeeDTOS=employeeService.getAllEmployee();
        return new ResponseEntity<>(new StandardResponse(200,"success",employeeDTOS),HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<StandardResponse> updateEmployee(@PathVariable (value = "id") long employeeId,@RequestBody EmployeeDTO employeeDTO ){
        EmployeeDTO employeeDTO1=employeeService.updateEmployee(employeeId,employeeDTO);

        return new ResponseEntity<>(new StandardResponse(200,"sucess",employeeDTO1),HttpStatus.CREATED);

    }
}

package lk.ijse.dep11.ems.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeDTO {
    private long EmployeeId;
    private String firstName;
    private String lastName;
    private String email;

}

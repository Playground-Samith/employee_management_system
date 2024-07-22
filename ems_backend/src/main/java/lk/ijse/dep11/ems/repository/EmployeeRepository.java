package lk.ijse.dep11.ems.repository;

import lk.ijse.dep11.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    boolean existsByEmail(String email);

    Employee findByEmail(String newEmail);

    Employee findByEmployeeId(long employeeId);
}


package lk.ijse.dep11.ems.advisor;


import lk.ijse.dep11.ems.exception.ConflictException;
import lk.ijse.dep11.ems.exception.NotFoundException;
import lk.ijse.dep11.ems.util.StandardResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class AppWideExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException e){
       return new ResponseEntity<>(new StandardResponse(404,"Not Found",e.getMessage()), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConflictException.class)
    public ResponseEntity handleConflictException(ConflictException e){
        return new ResponseEntity<>(new StandardResponse(404,"Conflict",e.getMessage()), HttpStatus.CONFLICT);
    }
}

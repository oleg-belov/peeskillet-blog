package io.github.psamsotha.blog.common.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * @author Paul Samsotha.
 */
@RestControllerAdvice
public class NotFoundExceptionHandler extends ResponseEntityExceptionHandler {


    @ExceptionHandler({NotFoundException.class})
    public ResponseEntity handleNotFoundException(NotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}

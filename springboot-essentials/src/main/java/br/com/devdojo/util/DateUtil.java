package br.com.devdojo.util;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class DateUtil {
    public String formatLocalDatTimeToDatabaseStyle(LocalDateTime localDateTime){
        return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(localDateTime);
    }
}

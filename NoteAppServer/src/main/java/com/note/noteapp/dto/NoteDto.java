package com.note.noteapp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NoteDto {
    private String studentFirstname;

    private String studentLastname;

    private Double note;
}

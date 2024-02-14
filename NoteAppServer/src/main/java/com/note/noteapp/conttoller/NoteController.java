package com.note.noteapp.conttoller;

import com.note.noteapp.dto.NoteDto;
import com.note.noteapp.entity.Note;
import com.note.noteapp.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/notes")
@RequiredArgsConstructor
public class NoteController {

    private final NoteService noteService;

    @GetMapping("")
    public ResponseEntity<?> getNotes(@RequestParam(name = "orderBy", required = false) String orderBy) {
        List<Note> notes;

        if(orderBy == null) {
            notes = noteService.getAllNotes();
        } else if (orderBy.equals("note")) {
            notes = noteService.getSortedNotes();
        } else {
            notes = noteService.getAllNotes();
        }

        return ResponseEntity.ok(notes);
    }

    @PostMapping("/new_note")
    public ResponseEntity<?> CreateNewNote(@RequestBody NoteDto noteDto){
        Note note = noteService.addNewNote(noteDto);

        MultiValueMap<String,String> headers = new LinkedMultiValueMap<>();
        headers.add("Create-Massage", "The record has been created successfully");

        return new  ResponseEntity<>(note, new HttpHeaders(headers), HttpStatus.CREATED);
    }

    @DeleteMapping("/delete_note/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable Long id){
        return noteService.deleteNote(id);
    }

    @GetMapping("/note_detail/{id}")
    public ResponseEntity<?> getNoteById(@PathVariable Long id){
        Note note = noteService.getNote(id);

        return ResponseEntity.ok(note);
    }

    @GetMapping("/average-calculation")
    public ResponseEntity<?> averageCalculation(){
        return ResponseEntity.ok(noteService.averageCalculation());
    }
}

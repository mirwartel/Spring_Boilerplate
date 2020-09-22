package com.example.demo.controllers;

import com.example.demo.entities.Document;

import com.example.demo.entities.DocumentFolder;
import com.example.demo.repositories.DocumentRepo;

import com.example.demo.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/")
public class DocumentController {


    @Autowired
    DocumentService documentService;

    @GetMapping("/documents/{id}")
    public Optional<Document> getDocumentById(@PathVariable int id) {

        return documentService.findDocumentById(id);

    }

    @GetMapping("/documents")
    public List<Document> getAllDocuments() {

        return documentService.findAllDocuments();

    }

    @GetMapping("/documents/folder/{name}")
    public List<Document> getDocumentsByFolder(@PathVariable int id){
        return documentService.findAllByFolder(id);
    }

    @PostMapping("/documents")
    public Document createNewDocument(@RequestBody Document document){
        return documentService.createNewDocument(document);
    }
}

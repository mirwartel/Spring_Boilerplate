package com.example.demo.services;

import com.example.demo.entities.Document;
import com.example.demo.repositories.DocumentFolderRepo;
import com.example.demo.repositories.DocumentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    DocumentRepo documentRepo;
    @Autowired
    DocumentFolderRepo documentFolderRepo;

    public List<Document> findAllDocuments() {
        return (List<Document>) documentRepo.findAll();
    }

    public Optional<Document> findDocumentById(int id) {
        return documentRepo.findById(id);
    }

    public List<Document> findAllByFolder(int  id) {
        return documentRepo.findAllByFolder(id);
    }

    public Document createNewDocument(Document newDocument){
        return documentRepo.save(newDocument);
    }
}
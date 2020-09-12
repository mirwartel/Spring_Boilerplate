package com.example.demo.services;

import com.example.demo.entities.Document;
import com.example.demo.repositories.DocumentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentService {

    @Autowired
    DocumentRepo documentRepo;

    public List<Document> findAllDocuments() {
        return (List<Document>) documentRepo.findAll();
    }

    public Optional<Document> findUserById(int id) {
        return documentRepo.findById(id);
    }
}
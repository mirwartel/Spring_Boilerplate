package com.example.demo.services;

import com.example.demo.entities.DocumentFolder;
import com.example.demo.repositories.DocumentFolderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocumentFolderService {

    @Autowired
    DocumentFolderRepo documentFolderRepo;

    public List<DocumentFolder> findAllDocuments() {
        return (List<DocumentFolder>) documentFolderRepo.findAll();
    }

    public Optional<DocumentFolder> findUserById(int id) {
        return documentFolderRepo.findById(id);
    }
}
package com.example.demo.services;

import com.example.demo.entities.Document;
import com.example.demo.entities.DocumentFolder;
import com.example.demo.repositories.DocumentFolderRepo;
import com.example.demo.repositories.DocumentRepo;
import com.example.demo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentFolderService {

    @Autowired
    DocumentFolderRepo documentFolderRepo;
    @Autowired
    DocumentRepo documentRepo;
    @Autowired
    UserRepo userRepo;

    public List<DocumentFolder> findAllDocumentFolders() {
        return (List<DocumentFolder>) documentFolderRepo.findAll();
    }

    public DocumentFolder findDocumentFolderById(int id) {

        DocumentFolder folder = documentFolderRepo.findById(id);
        System.out.print("f");
        if (folder == null) return null;
        folder.setUploaderUsername(userRepo.findById(folder.getUploader()).get().getUsername());
        List<Document> documents = documentRepo.findAllByFolder(id);
        folder.setDocuments(documents);
        return folder;
    }


    public DocumentFolder createNewFolder(DocumentFolder newFolder) {
        return documentFolderRepo.save(newFolder);
    }
    

}
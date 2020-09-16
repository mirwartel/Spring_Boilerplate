package com.example.demo.controllers;


import com.example.demo.entities.DocumentFolder;
import com.example.demo.services.DocumentFolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest/")
public class DocumentFolderController {


    @Autowired
    DocumentFolderService documentFolderService;

    @GetMapping("/folders/{id}")
    public DocumentFolder findDocumentFolderById(@PathVariable int id) {



        return documentFolderService.findDocumentFolderById(id);

    }

    @GetMapping("/folders")
    public List<DocumentFolder> getAllDocumentFolders() {

        return documentFolderService.findAllDocumentFolders();

    }

    @PostMapping("/folders")
    public DocumentFolder createNewFolder(@RequestBody DocumentFolder folder){
        return documentFolderService.createNewFolder(folder);
    }
}

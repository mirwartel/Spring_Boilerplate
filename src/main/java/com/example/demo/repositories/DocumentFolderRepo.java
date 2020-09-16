package com.example.demo.repositories;

import com.example.demo.entities.DocumentFolder;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface DocumentFolderRepo extends CrudRepository<DocumentFolder, Integer> {
    public DocumentFolder findById(int id);
}

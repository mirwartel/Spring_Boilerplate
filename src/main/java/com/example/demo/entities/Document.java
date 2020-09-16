package com.example.demo.entities;

import javax.persistence.*;

@Entity
@Table(name = "documents")
public class Document {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int page_number;
    private String text;
    private String name;
    private String image_original;
    private String image_processed;
    private String image_boxes;
    private String creation_date;
    private String uploader;
    private int folder;


    public Document() {
    }

    public int getFolder() {
        return folder;
    }

    public void setFolder(int folder) {
        this.folder = folder;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPage_number() {
        return page_number;
    }

    public void setPage_number(int page_number) {
        this.page_number = page_number;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage_original() {
        return image_original;
    }

    public void setImage_original(String image_original) {
        this.image_original = image_original;
    }

    public String getImage_processed() {
        return image_processed;
    }

    public void setImage_processed(String image_processed) {
        this.image_processed = image_processed;
    }

    public String getImage_boxes() {
        return image_boxes;
    }

    public void setImage_boxes(String image_boxes) {
        this.image_boxes = image_boxes;
    }

    public String getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    public String getUploader() {
        return uploader;
    }

    public void setUploader(String uploader) {
        this.uploader = uploader;
    }
}



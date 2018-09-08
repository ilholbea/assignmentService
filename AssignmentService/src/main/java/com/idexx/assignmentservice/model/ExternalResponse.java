package com.idexx.assignmentservice.model;

import java.util.List;

public class ExternalResponse {
    private String mediaTitle;
    private List<String> mediaCreators;
    private String mediaType;
    private String mediaSource;
    private String artWork;

    public ExternalResponse() {
    }


    public ExternalResponse(String mediaTitle, List<String> mediaCreators, String mediaType, String mediaSource, String artWork) {
        this.mediaTitle = mediaTitle;
        this.mediaCreators = mediaCreators;
        this.mediaType = mediaType;
        this.mediaSource = mediaSource;
        this.artWork = artWork;
    }

    public String getArtWork() {
        return artWork;
    }

    public void setArtWork(String artWork) {
        this.artWork = artWork;
    }

    public String getMediaTitle() {
        return mediaTitle;
    }

    public void setMediaTitle(String mediaTitle) {
        this.mediaTitle = mediaTitle;
    }

    public List<String> getMediaCreators() {
        return mediaCreators;
    }

    public void setMediaCreators(List<String> mediaCreators) {
        this.mediaCreators = mediaCreators;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public String getMediaSource() {
        return mediaSource;
    }

    public void setMediaSource(String mediaSource) {
        this.mediaSource = mediaSource;
    }
}

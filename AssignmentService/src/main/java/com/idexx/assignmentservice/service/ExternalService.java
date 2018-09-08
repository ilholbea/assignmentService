package com.idexx.assignmentservice.service;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.idexx.assignmentservice.model.ExternalResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ExternalService {

    private static final Gson gson = new Gson();
    private RestTemplate restTemplate = new RestTemplate();

    @Value("${config.iTunes.maxNrOfResults}")
    private String maxNrOfResultsiTunes;

    @Value("${config.google.maxNrOfResults}")
    private String maxNrOfResultsGoogle;

    @Value("${config.iTunes.mediaType}")
    private String mediaTypeiTunes;

    public ExternalService() {
    }

    public List<ExternalResponse> callGoogleAPI(String input) throws Exception {
        List<ExternalResponse> responseList = new ArrayList<>();
        JsonObject googleJsonResponse = (new JsonParser()).parse(
                Objects.requireNonNull(
                        restTemplate.getForObject(
                                "https://www.googleapis.com/books/v1/volumes?q={input}&maxResults={maxResults}&apiKey=AIzaSyCoSNn5BTuoo8uYshKKvQtF5OUjMBD9Y0A",
                                String.class, input, maxNrOfResultsGoogle
                        ))).getAsJsonObject();

        if (googleJsonResponse.has("items")) {
            for (JsonElement item : googleJsonResponse.getAsJsonArray("items")) {
                ExternalResponse response = new ExternalResponse();
                if (item.getAsJsonObject().has("volumeInfo")) {
                    response.setMediaType(item.getAsJsonObject().get("volumeInfo").getAsJsonObject().has("printType") ? item.getAsJsonObject().get("volumeInfo").getAsJsonObject().get("printType").getAsString() : "");

                    List<String> authors = new ArrayList<>();
                    if (item.getAsJsonObject().getAsJsonObject().get("volumeInfo").getAsJsonObject().has("authors")) {
                        for (JsonElement author : item.getAsJsonObject().getAsJsonObject().get("volumeInfo").getAsJsonObject().get("authors").getAsJsonArray()) {
                            authors.add(author.getAsString());
                        }
                    }
                    response.setMediaCreators(authors);

                    response.setMediaTitle(item.getAsJsonObject().get("volumeInfo").getAsJsonObject().has("title") ? item.getAsJsonObject().get("volumeInfo").getAsJsonObject().get("title").getAsString() : "");
                    response.setMediaSource("google");
                } else {
                    response.setMediaType("");
                    response.setMediaCreators(new ArrayList<>());
                    response.setMediaTitle("");
                    response.setMediaSource("google");
                }
                responseList.add(response);

            }
        }

        return responseList;
    }


    public List<ExternalResponse> callItunesAPI(String input) throws Exception {
        List<ExternalResponse> responseList = new ArrayList<>();
        JsonObject iTunesJsonResponse = (new JsonParser()).parse(
                Objects.requireNonNull(restTemplate.getForObject(
                        "https://itunes.apple.com/search?term={term}&entity={entity}&limit={limit}",
                        String.class, input, mediaTypeiTunes, maxNrOfResultsiTunes
                ))).getAsJsonObject();

        for (JsonElement item : iTunesJsonResponse.getAsJsonArray("results")) {
            ExternalResponse response = new ExternalResponse();
            response.setMediaType(item.getAsJsonObject().get("collectionType").getAsString());

            List<String> creators = new ArrayList<>();
            creators.add(item.getAsJsonObject().get("artistName").getAsString());

            response.setMediaCreators(creators);
            response.setMediaTitle(item.getAsJsonObject().get("collectionName").getAsString());
            response.setMediaSource("iTunes");
            responseList.add(response);
        }

        return responseList;
    }
}

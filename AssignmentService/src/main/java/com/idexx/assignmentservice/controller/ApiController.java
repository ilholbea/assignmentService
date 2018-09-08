package com.idexx.assignmentservice.controller;


import com.google.gson.Gson;
import com.idexx.assignmentservice.model.ExternalResponse;
import com.idexx.assignmentservice.service.ExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ApiController {
    private static final Gson gson = new Gson();

    @Autowired
    ExternalService externalService;

    @RequestMapping(method = RequestMethod.GET, value = "getResultsFromGoogle", params = {"input"})
    public ResponseEntity<List<ExternalResponse>> getResultsFromGoogle(@RequestParam("input") String input) {
        List<ExternalResponse> googleApiResponse = new ArrayList<>();
        try {
            googleApiResponse = externalService.callGoogleAPI(input);
        } catch (Exception e) {
            //send error to interface
            return ResponseEntity.ok(googleApiResponse);
        }

        googleApiResponse = googleApiResponse.stream().sorted((object1, object2) -> object1.getMediaTitle().compareTo(object2.getMediaTitle())).collect(Collectors.toList());
        return ResponseEntity.ok(googleApiResponse);
    }

    @RequestMapping(method = RequestMethod.GET, value = "getResultsFromiTunes", params = {"input"})
    public ResponseEntity<List<ExternalResponse>> getResultsFromiTunes(@RequestParam("input") String input) {
        List<ExternalResponse> itunesApiResponse = new ArrayList<>();
        try {
            itunesApiResponse = externalService.callItunesAPI(input);
        } catch (Exception e) {
            //send error to interface
            return ResponseEntity.ok(itunesApiResponse);
        }
        itunesApiResponse = itunesApiResponse.stream().sorted((object1, object2) -> object1.getMediaTitle().compareTo(object2.getMediaTitle())).collect(Collectors.toList());
        return ResponseEntity.ok(itunesApiResponse);
    }


}

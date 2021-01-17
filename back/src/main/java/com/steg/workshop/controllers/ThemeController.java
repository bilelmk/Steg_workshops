package com.steg.workshop.controllers;

import com.steg.workshop.models.Theme;
import com.steg.workshop.services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("themes")
public class ThemeController {

    @Autowired
    private ThemeService themeService;

    @GetMapping
    public List<Theme> get() {
        return themeService.findAll() ;
    }

    @PostMapping()
    public Theme add(@RequestBody Theme theme) {
        return themeService.create(theme);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable Long id) {
        themeService.delete(id);
    }
}

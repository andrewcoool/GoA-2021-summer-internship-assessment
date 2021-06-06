package com.example.andrew.challenge2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

public class ExpandedImageActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_expanded_image);

        int imageId = getIntent().getIntExtra("IMAGE_ID", -1);

        setImageId(imageId);
    }

    /**
     * Set the image id of the image displayed in the expanded image activity.
     * @param imageId The id of the image
     */
    public void setImageId(int imageId){
        ImageView imgView = findViewById(R.id.expanded_image);
        imgView.setImageResource(imageId);
    }
}
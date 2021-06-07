package com.example.andrew.challenge2;

import android.content.Context;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Gallery;
import android.widget.ImageView;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class GalleryActivity extends AppCompatActivity {

    /**
     * Return an ArrayList of image ids for the images displayed in
     * the gallery. These image ids point to images in the drawable folder.
     *
     * @return An ArrayList of image ids for images in the drawable folder.
     */
    private ArrayList<Integer> getImageIds(){
        return new ArrayList<>(Arrays.asList(
                R.drawable.img1,
                R.drawable.img2,
                R.drawable.img3,
                R.drawable.img4,
                R.drawable.img5
        ));
    }

    /**
     * An adapter for feeding the image id data into the RecyclerView.
     */
    public class GalleryAdapter extends RecyclerView.Adapter<GalleryAdapter.ViewHolder>{
        private ArrayList<Integer> imageIds;
        private Context context;

        /**
         * Initialize a GalleryAdapter
         * @param context
         * @param imageIds
         */
        public GalleryAdapter(Context context, ArrayList<Integer> imageIds){
            this.imageIds = imageIds;
            this.context = context;
        }

        /**
         * Return a new view (grid cell) in the format of gridcell_layout
         *
         * @param viewGroup The container view group of the grid.
         * @param i The index of the new cell.
         * @return
         */
        @NonNull
        @Override
        public GalleryAdapter.ViewHolder onCreateViewHolder(ViewGroup viewGroup, int i){
            View newView = LayoutInflater.from(
                    viewGroup.getContext()).inflate(R.layout.gridcell_layout, viewGroup, false);
            return new ViewHolder(newView);
        }

        /**
         * This function is called when a new view holder (grid cell) is inserted.
         * Update the image data of the new view.
         * Create an onclick handler for displaying the image in ExpandedImageActivity.
         *
         * @param viewHolder The new view holder (new cell).
         * @param i The index of the new cell.
         */
        @Override
        public void onBindViewHolder(GalleryAdapter.ViewHolder viewHolder, int i){
            // Center and crop any overflow from the image
            viewHolder.imgView.setScaleType(ImageView.ScaleType.CENTER_CROP);
            // Set the image data
            viewHolder.imgView.setImageResource(imageIds.get(i));

            viewHolder.imgView.setOnClickListener(new View.OnClickListener(){
                @Override
                public void onClick(View view) {
                    Intent intent = new Intent(GalleryActivity.this, ExpandedImageActivity.class);
                    // Pass the image id to display in the creation of the new activity.
                    intent.putExtra("IMAGE_ID", imageIds.get(i));

                    startActivity(intent);
                }
            });
        }

        @Override
        public int getItemCount(){
            return imageIds.size();
        }

        public class ViewHolder extends RecyclerView.ViewHolder{
            private final ImageView imgView;
            public ViewHolder(View view){
                // Call the RecyclerView.ViewHolder constructor
                super (view);

                this.imgView = view.findViewById(R.id.img);
            }
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gallery);

        RecyclerView recyclerView = findViewById(R.id.gallery);
        recyclerView.setHasFixedSize(true);

        // Create a new grid layout for the recycler view with 3 columns
        RecyclerView.LayoutManager layoutManager = new GridLayoutManager(
                getApplicationContext(), 3);
        recyclerView.setLayoutManager(layoutManager);

        ArrayList<Integer> imageIds = getImageIds();
        GalleryAdapter adapter = new GalleryAdapter(getApplicationContext(), imageIds);

        recyclerView.setAdapter(adapter);
    }
}

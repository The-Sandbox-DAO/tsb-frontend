# TSB Frontend

This repository contains the frontend code used for the DAO interface, primarily integrated via Webflow.

## Directory Structure

*   **`src/`**: This directory holds the core frontend files.
    *   Files within `src/` are organized into subdirectories.
    *   Each subdirectory's name corresponds to a specific page on the frontend where its contained files are used.
*   **`tests/`**: This directory contains various scripts used for testing purposes. Please note that this folder currently requires cleanup. 

## Deployment

To make updated code live and accessible via the jsDelivr CDN:

1.  **Update the necessary file(s)** in the `src/` directory.
2.  **Rename the updated file.** A simple way to ensure a unique name and bypass caching is to increment a number in the filename (e.g., `script_v1.js` becomes `script_v2.js`). This ensures the changes are reflected immediately.
3.  **Commit and push** the changes to the GitHub repository.
4.  The updated file will then be available at a URL like: `https://cdn.jsdelivr.net/gh/krayt78/tsb-frontend/src/path/to/your/new_file_name.js` (replace `src/path/to/your/new_file_name.js` with the actual path and new filename).
5. Replace the URL in the webflow page with the new one.

The reason we do this is to bypass webflow's restriction on codebase size on its editor.
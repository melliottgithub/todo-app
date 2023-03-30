#!/bin/bash

#chmod +x git-push.sh to make it executable

# Prompt the user for a commit message
echo "Please enter a commit message:"
read commit_message

# Commit the changes with the specified commit message
git add .
git commit -m "$commit_message"

# Push the changes to the main branch
git push origin main

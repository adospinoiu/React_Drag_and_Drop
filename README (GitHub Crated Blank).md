# React_Drag_and_Drop

Drag_and_Drop Tutorial/Walk-Through

Background: While working on the Reading-List-App I realized I needed drag-and-drop functionality for the app. I had no idea how to do this. So I stopped working on the app to teach myself drag-and-drop. This walkthrough is for reference purposes on how I learned drag-and-drop

#1 Create the React-App with 'npx create-react-app <name>' and then delete the un-necessary files from the installation: App.test.js, logo.svg and setupTest.js

#2 The CSS to mark out the <divs> is pretty straight forward. Just enough to make it visible.

#3 The specific item (i.e. div) that needs to be 'draggable' is what is critical. It has to be identified as 'draggable or draggable=true' in the <div> field. You also have to assign a 'key' to the div-field.

#4 Now that the required <div> is 'draggable' need to work with State in order to update the information as the div moves locations.

#5 Information captured using useState and useRef to capture while <div> is being dragged, what position it is dragged to, and lastly, need to capture which position it is release on

#6 Code now handles the drag and drop within the same group, but also within different groups

#7 Code is now complete. Need alot more practice and understanding.

#8 The first try is with the simple react-dnd code. Next, going to try with the react-beautiful-dnd package

#9 Installed react-beautiful-dnd package
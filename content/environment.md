---
title: Environment
path: /environment
header: >-
  Environment (IDE). The Processing Environment includes a text editor, a
  compiler, and a display window. It enables the creation of software within a
  carefully designed set of constraints.

  ===========================================================================================================================================================================================
footer: Footer
sections:
  - sectionBody: >-
      The Processing Development Environment (PDE) makes it easy to write
      Processing programs. Programs are written in the Text Editor and started
      by pressing the Run button. In Processing, a computer program is called a
      _sketch_. Sketches are stored in the _Sketchbook_, which is a folder on
      your computer.


      Sketches can draw two- and three-dimensional graphics. The default
      renderer is for drawing two-dimensional graphics. The P3D renderer makes
      it possible to draw three-dimensional graphics, which includes controlling
      the camera, lighting, and materials. The P2D renderer is a fast, but less
      accurate renderer for drawing two-dimensional graphics. Both the P2D and
      P3D renderers are accelerated if your computer has an OpenGL compatible
      graphics card.


      The capabilities of Processing are extended with _Libraries_ and _Tools_.
      Libraries make it possible for sketches to do things beyond the _core_
      Processing code. There are hundreds of libraries contributed by the
      Processing community that can be added to your sketches to enable new
      things like playing sounds, doing computer vision, and working with
      advanced 3D geometry. Tools extend the PDE to help make creating sketches
      easier by providing interfaces for tasks like selecting colors.


      Processing has different _programming modes_ to make it possible to deploy
      sketches on different platforms and program in different ways. The Java
      mode is the default. Other programming modes may be downloaded by
      selecting "Add Mode..." from the menu in the upper-right corner of the
      PDE.
    sectionTitle: Overview
  - sectionBody: >-
      The Processing Development Environment (PDE) consists of a simple text
      editor for writing code, a message area, a text console, tabs for managing
      files, a toolbar with buttons for common actions, and a series of menus.
      The menus options change from mode to mode. The default Java mode is
      documented here.


      ![IDE screenshot](images/ide.gif)  


      Programs written using Processing are called sketches. These sketches are
      written in the text editor. It has features for cutting/pasting and for
      searching/replacing text. The message area gives feedback while saving and
      exporting and also displays errors. The console displays text output by
      Processing sketches including complete error messages and text output from
      sketches with the print() and println() functions. (Note that the console
      works well for occasional messages, but is not intended for high-speed,
      real-time output.)
    sectionTitle: Processing Development Environment (PDE)
  - sectionBody: >-
      The Processing Development Environment (PDE) is highly configurable. The
      most common preferences can be modified in the Preferences window, located
      in the File menu on Windows and Linux and in the Processing menu on Mac Os
      X. The full list of preferences are stored in the "preferences.txt" file.
      This file can be opened and edited directly only when Processing is not
      running. You can find the location of this file on your computer by
      reading the bottom-left corner of the Preferences window.


      *   _Sketchbook location_  
          Any folder can be used as the Sketchbook. Input a new location or select "Browse" to set the folder you want to use.
      *   _Language_  
          Select the language to use for the menus. Processing needs to be restarted after making a new selection.
      *   _Editor and Console font_  
          Select a different font to use for text in the Editor and Console. Note: the selected font should match the language used in the Text Editor. See the "Enable complex text input" preference below.
      *   _Editor font size_  
          Sets the font size of the code in the text editor.
      *   _Console font size_  
          Sets the font size of the text in the console.
      *   _Background color when Presenting_  
          Defined the background color used when a sketch is run with Present.
      *   _Use smooth text in editor window_  
          By default, the text in the editor is aliased. When checked, the editor switches to an anti-aliased (smoothed) font. Restart Processing after making this change.
      *   _Enable complex text input_  
          Enables the Text Editor to display non-Latin fonts such as Japanese. Processing needs to be restarted after making this selection.
      *   _Continuously check for errors and Show warnings_  
          Turn on and off the features that continuously check for and report potential code errors.
      *   _Code completion with Ctrl-space_  
          Turn on and off code completion. Press Ctrl-space to activate code completion while typing.
      *   _Suggest import statements_  
          When checked, Processing will try to suggest libraries to import when code from that library is detected.
      *   _Increase maximum available memory_  
          Allocates more RAM to Processing sketches when they run. Sketches that use media files (images, audio, etc.) sometimes require more RAM. Increase the amount of RAM if a sketch is throwing Out of Memory Errors.
      *   _Delete previous folder on export_  
          When checked (default behavior), Processing deletes the complete export folder before re-creating it and adding the new media.
      *   _Check for updates on startup_  
          When checked (default behavior), you'll be informed of new Processing software releases as they become available through a small dialog box that opens as Processing starts.
      *   _Run sketches on display_  
          If more than one monitor is attached, select the monitor on which to display the sketch.
    sectionTitle: Preferences
  - sectionBody: >-
      All Processing projects are called sketches. Each sketch has its own
      folder. The main file for each sketch has the same name as the folder and
      is found inside. For example, if the sketch is named "Sketch\_123", the
      folder for the sketch will be called "Sketch\_123" and the main file will
      be called "Sketch_123.pde". The PDE file extension is an acronym for the
      Processing Development Environment.


      Processing sketches can be stored anywhere on your computer, but by
      default they are stored in the sketchbook, which will be in different
      places on your computer or network depending if you use PC, Mac, or Linux
      and how the preferences are set. To locate this folder, select the
      "Preferences" option from the File menu (or from the "Processing" menu on
      the Mac) and look for the "Sketchbook location."


      A sketch folder sometimes contains other folders for media files and other
      code. When a font or image is added to a sketch by selecting "Add File..."
      from the Sketch menu, a "data" folder is created. Files may also be added
      to your Processing sketch by dragging them into the text editor. Image and
      sound files dragged into the application window will automatically be
      added to the current sketch's "data" folder. All images, fonts, sounds,
      and other data files loaded in the sketch must be in this folder.
    sectionTitle: Sketches & Sketchbook
  - sectionBody: "Processing has four built-in screen renderers. The default renderer is for drawing two-dimensional shapes. _P2D_ is a faster, but less accurate renderer for drawing two-dimensional shapes. _P3D_ is for three-dimensional geometry; it can also control the camera, lighting, and materials. The P2D and P3D renderers are accelerated if your computer has an OpenGL compatible graphics card. The smooth() function affects the amount of antialiasing for each renderer. Check the reference for smooth() for more information.\n\nWith the release of Processing 3.0, the _FX2D_ renderer is included. Use it for fast 2D graphics on large and high resolution displays for more speed than the default renderer. This renderer is still experimental, but it useful for certain conditions.\n\nThe renderer used for each sketch is specified through the size() function. If a renderer is not explicitly defined in size(), it uses the default renderer as shown in the following program:\n\nvoid **setup**() {\n\_\_size(200, 200);\n}\n\nvoid **draw**() {\n\_\_background(204);\n\_\_line(width/2, height/2, mouseX, mouseY);\n}\n\nTo change the renderer, add a third parameter to size(). For example:\n\nvoid **setup**() {\n\_\_size(200, 200, P2D);\n}\n\nvoid **draw**() {\n\_\_background(204);\n\_\_line(width/2, height/2, mouseX, mouseY);\n}\n\nA large effort has been made to make Processing code behave similarly across the different renderers, but there are currently some inconsistencies that are explained in the reference.\n\nFor more information, see the size() reference entry."
    sectionTitle: Renderers
  - sectionBody: >-
      Processing uses a Cartesian coordinate system with the origin in the
      upper-left corner. If your sketch is 320 pixels wide and 240 pixels high,
      coordinate (0, 0) is the upper-left pixel and coordinate (320, 240) is in
      the lower-right. The last visible pixel in the lower-right corner of the
      screen is at position(319, 239) because pixels are drawn to the right and
      below the coordinate.


      ![](images/coordinates2D3D.png)


      Using the three-dimension coordinate system of P3D, the z-coordinate is
      zero at the surface of the image, with negative z-values moving back in
      space. When drawing in 3D, the _camera_ is positioned in the center of the
      screen.
    sectionTitle: Coordinates
  - sectionBody: >-
      It can be inconvenient to write a long program within a single file. When
      Processing sketches grow to hundreds or thousands of lines, breaking them
      into modular units helps manage the different parts. Processing manages
      files with the Sketchbook and each sketch can have multiple files that are
      managed with tabs.


      The arrow button to the right of the tabs in the Processing Development
      Environment is used to manage these files. Click this button to reveal
      options to create a new tab, rename the current tab, and delete the
      current tab. Tabs are intended for more advanced users, and for this
      reason, the menu that controls the tabs is intentionally made less
      prominent.


      _Advanced_  
        
      When a program with multiple tabs is run, the code is grouped together and
      the classes in other tabs become inner classes. Because they're inner
      classes, they cannot have static variables. Simply place the "static"
      variable outside the class itself to do the same thing (it need not be
      explicitly named "static" once you list it in this manner). If you don't
      want code to be an inner class, you can also create a tab with a ".java"
      suffix, which means it will be interpreted as straight java code. It is
      also not possible to use static classes in separate tabs. If you do this,
      however, you'll need to pass the PApplet object to that object in that tab
      in order to get PApplet functions like line(), loadStrings() or
      saveFrame() to work.
    sectionTitle: 'Tabs, Multiple Files, and Classes'
  - sectionBody: >-
      The Processing Debugger is a tool for diagnosing problems with a sketch.
      Enable it to pause a sketch while running and advance through the code one
      line at a time. The debugger is enabled through the File menu (Debug >
      Enable Debugger) or by clicking the Debugger icon, the butterfly in the
      upper-right corner of the PDE.


      When the Debugger is enabled, the program runs as normal, but stops at
      "breakpoints." To create a breakpoint, set the cursor at the line you want
      to pause the sketch and select Debug > Toggle Breakpoint. The keyboard
      shortcut is Command-B. To remove the breakpoint, select Toggle Breakpoint
      again. When a breakpoint is added, the line number is replaced with the
      symbol: `<>`.


      Running the sketch in Debug mode causes the sketch to pause at any
      breakpoints. When paused, current variable values are visible in a
      separate pane. You can advance to the next breakpoint by selecting
      "Continue" or advance line by line through the code with "Step". Stepping
      only works within the scope of the current function being run.
    sectionTitle: Debug
  - sectionBody: >-
      Processing has different _programming modes_ to make it possible to deploy
      sketches on different platforms and program in different ways. The current
      default programming mode is _Java_ mode. Other programming modes such as
      _Android Mode_ and _Python_ are added by selecting "Add Mode..." from the
      menu in the upper-right corner of the PDE.
    sectionTitle: Programming Modes
  - sectionBody: >-
      Processing 3.0 includes a set of features to make it easier to install,
      update, and remove Libraries, Tools, Modes, and Examples.


      Add a contributed library by selecting "Add Library..." from the "Import
      Library..." submenu within the Sketch menu. This opens the Library
      Manager. Next, select a library and then click on Install to download it.


      Add a contributed tool by selecting "Add Tool..." from the Tools menu,
      then select a Tool to download from the Tool Manager.


      Add contributed modes by selecting "Add Mode..." from the Mode menu in the
      upper-right corner of the PDE, then select a Mode to install.


      Add contributed Examples by first opening the "Examples..." submenu from
      the File menu. Click on the Add Examples button to open the Examples
      Manager. Next, select an examples package and select Install to download.
    sectionTitle: 'Adding Libraries, Tools, and Modes'
  - sectionBody: >-
      The [Export information and
      Tips](http://wiki.processing.org/w/Export_Info_and_Tips) page on the
      Processing Wiki covers the details of exporting Applications from Java
      mode.
    sectionTitle: Export
  - sectionBody: "This mode makes it possible to write short programs to draw to the screen, but also enables complex Java programs as well. It can be used simply by beginners, but it scales to professional Java software development. Sketches written in this mode can be exported as Java Applications to run on Linux, Mac OS X, and Windows operating systems.\n\n_Advanced_  \n  \nJava files with the extension .java can be included with a Java mode sketch. They may be created directly in the PDE or copied into the sketch folder through the \"Add File...\" item in the Sketch menu or dragged into the text editor. It's possible to write any Java code in files with the .java extension. In fact, complete Java code can be written from inside the Processing Environment by subclassing PApplet like this:\n\npublic class MyDemo extends PApplet {\n   \t\n\nThis is for advanced developers only and is not really recommended. Using this technique means that any additional tabs will no longer be inner classes, meaning you'll have to do extra work to make them communicate properly with the host PApplet. It is not necessary to use this technique just to get features of the Java language. Advanced developers can also program with Processing in another Java Editor if higher-level code editing and tools are needed. Processing's core.jar can be used as a part of any Java project."
    sectionTitle: Java Mode
  - sectionBody: |-
      *   _Create Font..._  
          Converts fonts into the Processing font format (VLW) and adds to the current sketch. Opens a dialog box that gives options for setting the font, its size, if it is anti-aliased (smooth), and which characters to be generated. The amount of memory required for the font is determined by the size selected and the number of characters selected through the "Characters..." menu; Processing fonts are textures, so larger fonts require more image data. Fonts can also be created in the code with the createFont() function.
      *   _Color Selector..._  
          Interface for selecting colors. For each color, the HSB, RBG, and Hex values are shown. The Hex value can be copied into the clipboard with the Copy button.
      *   _Archive Sketch_  
          Archives a copy of the current sketch in .zip format. The archive is placed in the same folder as the sketch.
      *   _Install "processing-java"_  
          Installs the processing-java program to make it possible to build and run Java mode sketches from the command line.
      *   _Movie Maker_  
          Creates a QuickTime movie from a sequence of images. Options include setting the size, frame rate, and compression, as well as an audio file.
      *   _Add Tool..._  
          Opens the Tool Manager to browse and install new Tools.
    sectionTitle: Tools
  - sectionBody: >-
      * _New_

      Creates a new sketch in a new window, named as the current date is the
      format "sketch_YYMMDDa".

      * _Open..._

      Open a sketch in a new window.

      * _Open Recent_

      Select a sketch to open from the list of recently closed sketches.

      * _Sketchbook..._

      Open a new window to show the list of sketches in the sketchbook.

      * _Examples..._

      Open a new window to show the list of the examples.

      * _Close_

      Close the sketch in the frontmost window. If this is the last sketch
      that's open, you will be prompted whether you would like to quit. To avoid
      the prompt, use Quit instead of Close when you want to exit the
      application.

      * _Save_

      Saves the open sketch in it's current state.

      * _Save as..._

      Saves the currently open sketch, with the option of giving it a different
      name. Does not replace the previous version of the sketch.

      * _Export_

      Exports a Java application as an executable file and opens the folder
      containing the exported files.

      * _Page Setup_

      Define page settings for printing.

      * _Print (Ctrl+P)_

      Prints the code inside the text editor.

      * _Preferences_

      Change some of the ways Processing works. (This item is located in the
      Processing menu on Mac OS X.)

      * _Quit_

      Exits the Processing Environment and closes all Processing windows. (This
      item is located in the Processing menu on Mac OS X.)
    sectionTitle: File
  - sectionBody: |-
      *   _Undo_  
          Reverses the last command or the last entry typed. Cancel the Undo command by choosing Edit » Redo.
      *   _Redo_  
          Reverses the action of the last Undo command. This option is only available if there has already been an Undo action.
      *   _Cut_  
          Removes and copies selected text to the clipboard (an off-screen text buffer).
      *   _Copy_  
          Copies selected text to the clipboard.
      *   _Copy as HTML_  
          Formats code as HTML in the same way it appears in the Processing environment and copies it to the clipboard so it can be pasted somewhere else.
      *   _Paste_  
          Inserts the contents of the clipboard at the location of the cursor, and replaces any selected text.
      *   _Select All_  
          Selects all of the text in the file which is currently open in the text editor.
      *   _Auto Format_  
          Attempts to format the code into a more human-readable layout. Auto Format was previously called _Beautify_.
      *   _Comment/Uncomment_  
          Comments the selected text. If the selected text is already commented, it uncomments it.
      *   _Increase Indent_  
          Indents the selected text two spaces.
      *   _Decrease Indent (Ctrl+\[)_  
          If the text is indented, removes two spaces from the indent.
      *   _Find..._  
          Finds an occurence of a text string within the file open in the text editor and gives the option to replace it with a different text.
      *   _Find Next_  
          Finds the next occurence of a text string within the file open in the text editor.
      *   _Find Previous_  
          Finds the previous occurence of a text string within the file open in the text editor.
      *   _Use Selection for Find_  
          Sets the currently selected text as the item to find with Find Next and Find Previous.
    sectionTitle: Edit
  - sectionBody: |-
      *   _Run_  
          Runs the code (compiles the code, opens the display window, and runs the sketch inside)
      *   _Present_  
          Runs the code in the center of the screen with a solid-color background. Click the "stop" button in the lower left to exit the presentation or press the Escape key. Change the background color in the Preferences.
      *   _Tweak_  
          Runs the code in a way where some color and variable values can be changed while the code is running. The sketch needs to be saved before it can be run as a sketch to Tweak.
      *   _Stop_  
          If the code is running, stops the execution. Programs written without using the draw() function are stopped automatically after they draw.
      *   _Import Library_  
          Adds the necessary import statements to the top of the current sketch. For example, selecting Sketch » Import Library » pdf adds the statement "import processing.pdf.*;" to the top of the file. These import statements are necessary for using Libraries. Select Add Libraries... to open the Library Manager to browse and install new libraries.
      *   _Show Sketch Folder_  
          Opens the folder for the current sketch.
      *   _Add File..._  
          Opens a file navigator window. Select an image, font, or other media files to add it to the sketch's "data" folder.
    sectionTitle: Sketch
  - sectionBody: |-
      *   _Enable Debugger_  
          Activates the debugger. Note that the Run button will change to Debug. New Continue and Step buttons will appear, along with a separate window for viewing variable values.
      *   _Continue_  
          Advances the code until the next breakpoint.
      *   _Step_  
          Advances the code one line at a time. (Note that once the code reaches the end of the current function call, the debugger will revert to "continue.")
      ff*   _Step Into_  
          Advances the debugger into the interior of a function call. This only works for user-defined functions in the sketch.
      *   _Step Out_  
          Advances the debugger outside of a function to the calling area. This only works for user-defined functions in the sketch.
      *   _Toggle Breakpoint_  
          Add or remove a breakpoint. When a breakpoint is added, the line number is replaced with the symbol: `<>`.
    sectionTitle: Debug
  - sectionBody: |-
      *   _Environment_  
          Opens the reference for the Processing Development Environment (this page) in the default web browser.
      *   _Reference_  
          Opens the reference in the default web browser. Includes references for the language, programming environment, and core libraries.
      *   _Find in Reference_  
          Select an element of the Processing language in the text editor and select Find in Reference to open that page in the default web browser.
      *   _Libraries Reference_  
          Select from the list to open the reference for compatiable Libraries.
      *   _Tools Reference_  
          Select from the list to open the reference for compatiable Tools.
      *   _Getting Started_  
          Opens the online Getting Started tutorial in the default browser.
      *   _Troubleshooting_  
          Opens the online Troubleshooting wiki page in the default browser.
      *   _Frequently Asked Questions_  
          Opens the online FAQ wiki page in the default browser.
      *   _The Processing Foundation_  
          Opens the Foundation website in the default browser.
      *   _Visit Processing.org_  
          Opens Processing website in the default browser.
    sectionTitle: Help
  - sectionBody: >-
      The buttons on the toolbar can run and stop programs,:


      ![](images/play.gif)


      _Run_  

      Runs the sketch. In Java mode, it compiles the code and opens a new
      display window.


      ![](images/stop.gif)


      _Stop_  

      Terminates a running sketch.


      Additional commands are found within the six menus: File, Edit, Sketch,
      Debug, Tools, Help. The menus are context sensitive which means only those
      items relevant to the work currently being carried out are available.
    sectionTitle: Toolbar
---
Body

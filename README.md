# HandMaestro: ASL Practice Platform

HandMaestro is a web application that provides an interactive platform for learning American Sign Language (ASL).

It utilizes your webcam and sophisticated on-device machine learning to interpret and provide real-time feedback on ASL gestures, starting with the foundational alphabet. This approach gives instant feedback, allowing for fast, free practice.

## How the ASL Recognition Works:

1.  **Webcam Input:** The application accesses your device's webcam to capture a live video stream.
2.  **Hand Landmark Detection:** MediaPipe's `GestureRecognizer` processes this video feed in real-time, identifying key points (landmarks) on the user's hand within each frame. This creates a skeletal model of the hand.
3.  **Gesture Classification:** These landmarks are then passed to a custom-trained machine learning model (`ASL_Recognizer.task`). This model, trained on thousands of Kaggle images, has been specifically designed to classify the configuration of parts of the hand into corresponding ASL alphabet signs.
4.  **Real-time Feedback:** The recognized sign is instantly displayed to the user, allowing for immediate comparison against the target sign they are practicing.

This machine learning pipeline offers learners the ability to practice independently, receive instant visual confirmation of their attempts, and iteratively refine their handshapes for greater accuracy.

**Core Technologies:**

*   **Machine Learning Engine:** MediaPipe (`GestureRecognizer` Task) for robust, real-time hand landmark detection and ASL gesture classification directly in the browser.
*   **Application Framework:** Astro
*   **Primary Language:** TypeScript
*   **Frontend User Interface:** HTML, CSS

HandMaestro aims to deliver a responsive and accurate learning experience for individuals working on their ASL.

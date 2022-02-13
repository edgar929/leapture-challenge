import React from "react";
import { useEffect, useState } from "react";
import { response } from "../utils";

//Import the data from utils.js and simply parse the response in /customer/dashboard. It’s all you need for a
// Social Media timeline. Make it look like a facebook timeline.
export const Timeline = () => {
    return (
        <div className="timeline">
            <div className="timeline-container">
                <div className="timeline-item">
                    <img src="../assets/cold-bg.jpg" alt="timeline" />
                </div>
                <div>
                    <h3>shumbusho edgar</h3>
                    <p>2022-12-08</p>
                </div>
            </div>
            <div>
                <img src="https://leapsocial-stc.leapture.com/uploads/profile_image/f167f911-f423-4510-8bea-249959c86b80-.jpg" />
            </div>
        </div>
          )
}
export default Timeline;
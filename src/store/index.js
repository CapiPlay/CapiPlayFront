import { configureStore } from "@reduxjs/toolkit"

// Slice
import userSlice from "./features/user/userSlice"
import engagementSlice from "./features/engagement/engagementSlice"
import videoSlice from "./features/video/videoSlice"
import shortsSlice from "./features/shorts/shortsSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    engagement: engagementSlice,
    video: videoSlice,
    shorts: shortsSlice
  },
})

export default store
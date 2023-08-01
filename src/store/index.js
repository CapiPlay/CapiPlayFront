import { configureStore } from "@reduxjs/toolkit"

// Slice
import userSlice from "./features/user/userSlice"
import engagementSlice from "./features/engagement/engagementSlice"
import videoSlice from "./features/video/videoSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    engagement: engagementSlice,
    video: videoSlice
  },
})

export default store
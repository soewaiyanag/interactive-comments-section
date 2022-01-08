import { useState } from "react";
import Comment from "./Comment";

function App() {
  return (
    <div className="bg-black h-screen">
      <Comment>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </Comment>
    </div>
  );
}

export default App;

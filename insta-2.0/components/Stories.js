import faker from "@faker-js/faker";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
function Stories() {
    const [suggestions, setSuggestions] = useState([])
  // populate list of fake users
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions)
  }, []);

  return (
      <div>
          {suggestions.map(profile => (
              <Story key= {profile.id}/>
          ))}
      </div>
  
    );
}

export default Stories;

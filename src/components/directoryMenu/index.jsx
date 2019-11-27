import React, { useState } from "react";

import MenuItem from "../menuItem";

const jsonData = [
  {
    title: "hats",
    imageUrl:
      "https://images.unsplash.com/photo-1484971606062-44a19b71808c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 1,
    linkUrl: "hats"
  },
  {
    title: "jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 2,
    linkUrl: ""
  },
  {
    title: "sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 3,
    linkUrl: ""
  },
  {
    title: "women",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 4,
    size: "large",
    linkUrl: ""
  },
  {
    title: "men",
    imageUrl:
      "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    id: 5,
    size: "large",
    linkUrl: ""
  }
];

const DirectoryMenu = props => {
  const [sections] = useState(jsonData);
  return (
    <div className="directory-menu">
      {/* {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))} */}

      {/* The above can be written like this */}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
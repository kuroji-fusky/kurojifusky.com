import React from 'react';

interface ISectionPwaps {
  heading: string;
  emojiKey: string;
  sectionClassName?: string;
  sectionStyles?: any;
  sectionId?: string;
  children?: any;
}

export default function ShowcaseSection({
  heading = "Bruh moment",
  emojiKey = "😳",
  sectionClassName,
  sectionStyles,
  sectionId,
  children
}: ISectionPwaps): JSX.Element {
  return <div className="section">
    <div className="section-header">
      <h3 style={{ "--emoji-key": `"${emojiKey}"` } as React.CSSProperties}>{heading}</h3>
    </div>
    <div
      className={sectionClassName}
      style={sectionStyles}
      id={sectionId}
    >
      {children}
    </div>
  </div>;
};

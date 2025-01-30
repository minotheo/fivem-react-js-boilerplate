import React, {
  useCallback,
} from 'react';

const Layout = (
  {
    children,
    background,
    containerName = "",
  },
) => {
  const getStyles = useCallback(
    () => {
      const styles = {};
      if(background) {
        styles.backgroundImage = `url(${background})`;
      }
      return styles;
    }, [background],
  );
  const getClassNames = useCallback(
    () => {
      const classes = ["_layout"];
      if(containerName) {
        classes.push(containerName);
      }
      return classes.join(" ");
    }, [containerName],
  )
  return (
    <div className={getClassNames()} style={getStyles()} children={children}/>
  );
};

export default Layout;
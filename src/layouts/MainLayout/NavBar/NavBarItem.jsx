// import { NavLink as RouterLink } from 'react-router-dom';

// // clsx
// import clsx from 'clsx';

// // material core
// import { Link, Button, ListItem } from '@mui/material';

// // components
// import NavBarExpandItem from './NavBarExpandItem';

// // styles
// import useStyles from './styles';

// const NavBarItem = ({
//   depth,
//   icon: Icon,
//   title,
//   open: openProp,
//   href,
//   label,
//   isExternalLink = false,
//   children,
// }) => {
//   const classes = useStyles();

//   let paddingLeft = 24;
//   if (depth > 0) {
//     paddingLeft = 40 + 8 * depth;
//   }

//   const style = { paddingLeft };

//   if (children) {
//     return (
//       <NavBarExpandItem title={title} icon={Icon} open={openProp} style={style}>
//         {children}
//       </NavBarExpandItem>
//     );
//   }

//   return (
//     <ListItem className={clsx(classes.itemLeaf)} disableGutters key={title}>
//       {true ? (
//         <>
//           {isExternalLink ? (
//             <Link
//               href={href}
//               target="_blank"
//               style={style}
//               className={clsx(classes.buttonLeaf, `depth-${depth}`)}
//             >
//               {Icon && <Icon className={classes.icon} size="20" />}
//               <span className={classes.title}>{title}</span>
//             </Link>
//           ) : (
//             <Button
//               activeClassName={classes.active}
//               className={clsx(classes.buttonLeaf, `depth-${depth}`)}
//               component={RouterLink}
//               exact
//               style={style}
//               to={href}
//             >
//               {Icon && <Icon className={classes.icon} size="20" />}
//               <span className={classes.title}>{title}</span>
//             </Button>
//           )}
//         </>
//       ) : null}
//     </ListItem>
//   );
// };

// export default NavBarItem;

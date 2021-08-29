import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faBorderAll,
  faCalendar,
  faCheckCircle,
  faCheckSquare,
  faChevronRight,
  faColumns,
  faCommentAlt,
  faCopy,
  faCreditCard,
  faEnvelope,
  faFileAlt,
  faTable,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";

interface ItemProps {
  open: boolean;
}

const useStyles = makeStyles((theme) => ({
  subHeader: {
    color: theme.palette.primary.dark,
  },
  subHeaderShift: {
    display: "none",
  },
}));

export const MainListItems = ({ open }: ItemProps) => {
  const classes = useStyles();

  return (
    <div>
      <ListSubheader
        className={clsx(classes.subHeader, !open && classes.subHeaderShift)}
      >
        APPS
      </ListSubheader>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCommentAlt} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCheckSquare} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Todo" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCalendar} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </div>
  );
};

export const SecondaryListItems = ({ open }: ItemProps) => {
  const classes = useStyles();

  return (
    <div>
      <ListSubheader
        className={clsx(classes.subHeader, !open && classes.subHeaderShift)}
      >
        UI ELEMENTS
      </ListSubheader>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faBorderAll} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Grid" />
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faChevronRight} style={{ width: 24 }} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faTint} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Colors" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCreditCard} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Card" />
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faChevronRight} style={{ width: 24 }} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faTable} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Table" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faArchive} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Components" />
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faChevronRight} style={{ width: 24 }} />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

export const ThirdListItems = ({ open }: ItemProps) => {
  const classes = useStyles();

  return (
    <div>
      <ListSubheader
        className={clsx(classes.subHeader, !open && classes.subHeaderShift)}
      >
        FORMS
      </ListSubheader>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCopy} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Form Elements" />
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faChevronRight} style={{ width: 24 }} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faColumns} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Form Layouts" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faFileAlt} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Form Wizard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon style={{ minWidth: 36 }}>
          <FontAwesomeIcon icon={faCheckCircle} style={{ width: 24 }} />
        </ListItemIcon>
        <ListItemText primary="Form Validation" />
      </ListItem>
    </div>
  );
};

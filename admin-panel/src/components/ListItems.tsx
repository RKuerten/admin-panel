import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faBorderAll,
  faCalendar,
  faCheckCircle,
  faCheckSquare,
  faColumns,
  faCommentAlt,
  faCopy,
  faCreditCard,
  faEnvelope,
  faFileAlt,
  faTable,
  faTint,
} from "@fortawesome/free-solid-svg-icons";

export const mainListItems = (
  <div>
    <ListSubheader>APPS</ListSubheader>
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

export const secondaryListItems = (
  <div>
    <ListSubheader>UI ELEMENTS</ListSubheader>
    <ListItem button>
      <ListItemIcon style={{ minWidth: 36 }}>
        <FontAwesomeIcon icon={faBorderAll} style={{ width: 24 }} />
      </ListItemIcon>
      <ListItemText primary="Grid" />
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
    </ListItem>
  </div>
);

export const thirdListItems = (
  <div>
    <ListSubheader>FORMS</ListSubheader>
    <ListItem button>
      <ListItemIcon style={{ minWidth: 36 }}>
        <FontAwesomeIcon icon={faCopy} style={{ width: 24 }} />
      </ListItemIcon>
      <ListItemText primary="Grid" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ minWidth: 36 }}>
        <FontAwesomeIcon icon={faColumns} style={{ width: 24 }} />
      </ListItemIcon>
      <ListItemText primary="Colors" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ minWidth: 36 }}>
        <FontAwesomeIcon icon={faFileAlt} style={{ width: 24 }} />
      </ListItemIcon>
      <ListItemText primary="Card" />
    </ListItem>
    <ListItem button>
      <ListItemIcon style={{ minWidth: 36 }}>
        <FontAwesomeIcon icon={faCheckCircle} style={{ width: 24 }} />
      </ListItemIcon>
      <ListItemText primary="Table" />
    </ListItem>
  </div>
);

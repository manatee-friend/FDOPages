import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Announcements = new Mongo.Collection('Announcements');

/** Define a schema to specify the structure of each document in the collection. */


const AnnouncementsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Announcement Title",
  },
  content: {
    type: String,
    label: "Description / content of announcement",

  },
  user: {
    type: String,
    label: "Id of user / member that posted announcement"
  },
  contact: {
    type: String,
    label: "Email / username to get in contact with announcement poster"
  },
  userLevel: {
    type: String,
    label: "Level or community affiliation of member with in organization"
  },
  timePosted: {
    type: Date,
    label: "Time the article was posted by the user"
  },
  community: {
    type: String,
    label: "Community level the announcement is intended for"
  }




}, { tracker: Tracker });

/** Attach this schema to the collection. */
Announcements.attachSchema(AnnouncementsSchema);


/** Make the collection and schema available to other code. */
export { Announcements, AnnouncementsSchema };
import React from "react";

// Statuses Icons
import NoCreatedIcon from 'material-ui-icons/Add';
import CreatedIcon from 'material-ui-icons/QueryBuilder';
import SendIcon from 'material-ui-icons/NearMe';
import CompleteIcon from 'material-ui-icons/Check';
import ErrorIcon from 'material-ui-icons/PriorityHigh';

// Document Menu Icons
import CreateFileIcon from 'material-ui-icons/NoteAdd';
import EditFileIcon from 'material-ui-icons/Edit';
import DeleteFileIcon from 'material-ui-icons/Delete';
import PrintFileIcon from 'material-ui-icons/Print';
import DownloadFileIcon from 'material-ui-icons/FileDownload';

export const DOCUMENTS = [
  {
    date: "28.02.2018",
    reports: [
      {
        name: "Налог на добычу полезных ископаемых",
        direction: "ФНС",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "ЗАО Калуга Астрал",
            status: 2,
            date: "27.02.2018 12:20",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "Грудинин и КО",
            status: 3,
            date: "27.02.2018 17:20",
            period: "I квартал 2018",
            recipient: "ИФНС50"
          },
          {
            name: "Грудинин и КО",
            status: 3,
            date: "27.02.2018 17:20",
            period: "I квартал 2018",
            recipient: "ИФНС50"
          },
          {
            name: "Организация 5",
            status: 4,
            date: "27.02.2018 10:15",
            period: "I квартал 2018",
            recipient: "ИФНС21"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "ИФНСКРЕМЛЬ"
          }
        ]
      },
      {
        name: "Налог на воздух",
        direction: "ФНС",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "ЗАО Калуга Астрал",
            status: 2,
            date: "27.02.2018 12:20",
            period: "I квартал 2018",
            recipient: "ИФНС40"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "ИФНСКРЕМЛЬ"
          }
        ]
      }
    ]
  },
  {
    date: "01.03.2018",
    reports: [
      {
        name: "Налог на физических лиц",
        direction: "Росстат",
        description: "Какое-то описание файла или доп. информация",
        organizations: [
          {
            name: "Рога и Копыта",
            status: 1,
            date: "26.02.2018 15:34",
            period: "I квартал 2018",
            recipient: "Росстат Калуга"
          },
          {
            name: "Русская держава Путин царь",
            status: 0,
            period: "I квартал 2018",
            recipient: "Росстат Кремль"
          }
        ]
      }
    ]
  }
];

export const STATUSES = [
  {
    id: 0,
    title: "Не создан",
    icon: <NoCreatedIcon />,
    color: "#fff"
  },
  {
    id: 1,
    title: "Не отправлен",
    icon: <CreatedIcon />,
    color: "#7e8992"
  },
  {
    id: 2,
    title: "Отправлен",
    icon: <SendIcon />,
    color: "#0071D4"
  },
  {
    id: 3,
    title: "Завершен",
    icon: <CompleteIcon />,
    color: "#0aac18"
  },
  {
    id: 4,
    title: "Требуется корректировка",
    icon: <ErrorIcon />,
    color: "#ff4c4c"
  }
];

export const DOCUMENT_MENU = [
  {
    key: "create-file",
    statuses: [0],
    title: "Создать документ",
    icon: <CreateFileIcon />
  },
  {
    key: "send-file",
    statuses: [1, 4],
    title: "Отправить",
    icon: <SendIcon />,
    divider: true
  },
  {
    key: "edit-file",
    statuses: [1, 4],
    title: "Редактировать",
    icon: <EditFileIcon />
  },
  {
    key: "edit-file",
    statuses: [2, 3, 4],
    title: "Создать корректировку",
    icon: <EditFileIcon />
  },
  {
    key: "print-file",
    statuses: [1, 2, 3, 4],
    title: "Печать",
    icon: <PrintFileIcon />
  },
  {
    key: "delete-file",
    statuses: [1, 2, 3, 4],
    title: "Удалить",
    icon: <DeleteFileIcon />,
    divider: true
  },
  {
    key: "download-file",
    statuses: [1, 2, 3, 4],
    title: "Скачать",
    icon: <DownloadFileIcon />
  }
];
import React from "react";
import styled from "styled-components";
import RecordItem from "./Records/RecordItem";
import RecordsGroup from "./Records/RecordsGroup";
import Paper from "material-ui/Paper";

function ReportItem({ data, records, organization, directions }) {
  const _records = records.reduce((prev, item) => {
    let Record = null;
    if (organization == "all") Record = <RecordsGroup data={item} />;
    else {
      let _recordData = item.recordReports.find(
        item => item.organization == organization
      );

      if (_recordData)
        Record = (
          <RecordItem
            key={Math.random()}
            data={_recordData}
            title={item.title}
            organization={organization}
            directions={directions}
            direction={item.direction}
          />
        );
    }
    if (Record)
      prev.push(<ReportContent elevation={2}>{Record}</ReportContent>);
    return prev;
  }, []);

  if (!_records.length) return null;
  return (
    <Report>
      <DataBlock today={data == "Сегодня"}>{data}</DataBlock>
      {_records}
    </Report>
  );
}

export default ReportItem;

const DataBlock = styled.span`
  margin-left: -2px;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  padding: 3px 6px;
`;
const ReportContent = styled(Paper)`
  padding: 15px 10px 10px;
  width: 99%;
  display: flex;
  flex-wrap: wrap;
  //flex-direction:column;
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  //height:95%;
`;

const Report = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: start;
  justify-content: center;
  width: 100%;
  //padding: 15px 5px;
  //height:500px;
  //background-color: rgba(171, 124, 207, 0.2);
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

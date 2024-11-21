import "./index.css";
import { useContext, useState } from "react";
import usePost from "../../hooks/gen-npc";
import { Splitter, Typography, Radio, Flex, Button } from "antd";
import { SpeciesList } from "../species-list";
import GeneratorResult from "../generator-result";
import { GeneratedDispatchContext } from "../../contexts/generated-context";
import { useEffect } from "react";

const { Title } = Typography;
const TTitle = (props) => {
  const title = { margin: "0", textAlign: "center" };
  return (
    <Title level={props.level} style={title}>
      {props.text}
    </Title>
  );
};

export default function NPCGenerator() {
  const { data, makePost } = usePost("http://localhost:8000/gen/npc");
  const dispatch = useContext(GeneratedDispatchContext);
  const [species, setSpecies] = useState(null);
  const [ageGroup, setAgeGroup] = useState("RANDOM");

  const splitter = { height: "100%", minHeight: "100%" };

  const handleSpecies = (specie) => {
    setSpecies(specie);
  };

  const handleAge = (e) => {
    setAgeGroup(e.target.value);
  };
  const submit = () => {
    makePost({ species, ageGroup });
  };

  useEffect(() => dispatch({ type: "npc", data }), [data]);

  return (
    <>
      <Splitter style={splitter}>
        <Splitter.Panel
          defaultSize="33%"
          resizable={false}
          style={{ display: "flex", paddingTop: "1%", paddingBottom: "1%" }}
        >
          <Flex vertical justify="space-between">
            <Flex justify="center" vertical gap="middle">
              <Flex style={{ margin: "0 auto" }} gap="small" vertical>
                <TTitle text={"Species"} level={4} />
                <SpeciesList handleClick={handleSpecies} />
              </Flex>
              <Flex style={{ margin: "0 auto" }} gap="small" vertical>
                <TTitle text={"Age Group"} level={5} />
                <Radio.Group
                  defaultValue="RANDOM"
                  buttonStyle="solid"
                  onChange={handleAge}
                  style={{ margin: "0 auto" }}
                >
                  <Radio.Button value="RANDOM">Random</Radio.Button>
                  <Radio.Button value="CHILD">Child</Radio.Button>
                  <Radio.Button value="YOUNG_ADULT">Young Adult</Radio.Button>
                  <Radio.Button value="ADULT">Adult</Radio.Button>
                  <Radio.Button value="SENIOR">Senior</Radio.Button>
                </Radio.Group>
              </Flex>
            </Flex>
            <Button
              block
              onClick={submit}
              style={{ width: "90%", margin: "0 auto", marginTop: "auto" }}
              type="primary"
            >
              Submit
            </Button>
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel>
          <GeneratorResult />
        </Splitter.Panel>
      </Splitter>
    </>
  );
}
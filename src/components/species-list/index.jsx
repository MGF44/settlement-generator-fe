import { Flex } from "antd";
import SpeciesCard from "../species-card";
import useFetch from "../../hooks/fetch-data";
import { useState } from "react";

export function SpeciesList(props) {
  const { data } = useFetch("http://localhost:8000/default-data/species");
  const [selected, setSelected] = useState(null);
  const onClick = (ix, species) => {
    setSelected(ix != selected ? ix : null);
    props.handleClick(species);
  };

  const Species = () => {
    if (data) {
      return data
        .map((item, ix) => (
          <SpeciesCard
            name={item.name}
            key={ix}
            selected={ix === selected}
            click={() => onClick(ix, item)}
          />
        ))
        .concat(
          <SpeciesCard
            click={() => onClick(data.length)}
            selected={data.length === selected}
            key={data.length}
          />
        );
    }
    return "";
  };

  return (
    <Flex wrap gap="small" style={{ margin: "0 auto" }} justify="center">
      <Species />
    </Flex>
  );
}

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Boat from "./Boat";
import Expedia from "./Expedia";
import Licious from "./Licious";
import Rento from "./Rento";
function AllProjects(){




    return(
        <SimpleGrid id="project" columns={[1,1, 1,2]} spacingX='40px'>
  <Box > <Rento /></Box>
  
  <Box ><Boat /></Box>
  <Box ><Expedia /></Box>
  <Box ><Licious /></Box>
  

    
        
        
        
       
        </SimpleGrid>        

    

    )
}
export default AllProjects
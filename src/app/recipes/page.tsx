'use client';
import ProductCard from '@/components/card';
import { Flex, Box, Button, Container } from '@chakra-ui/react';
import { Select, useChakraSelectProps } from 'chakra-react-select';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const RecipePage = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm();

  const options = [
    { value: 'option1', label: 'Option 1', colorScheme: 'red' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  const onSubmit = (data: any) => {
    console.log(data); // Access form data including the selected value
  };

  return (
    <Container>
      <Box padding="1.5rem">
        <Flex
          flexDirection={{
            base: 'column',
            md: 'row'
          }}
          marginTop={'2rem'}
          gap={10}
        >
          <ProductCard
            title="Vegetable Momo"
            time={'20 minutes'}
            image={'https://thebigmansworld.com/wp-content/uploads/2023/02/chicken-chow-mein-recipe.jpg'}
          />
          <ProductCard
            title="Vegetable Momo"
            time={'60 minutes'}
            image="https://assets.vogue.in/photos/5f0446d5800c753aed1a4b71/4:3/w_6547,h_4910,c_limit/momos%20tandoori%20momos%20chicken%20momos%20steamed%20dumplings%20easy%20recipes%20home%20recipes.jpg"
          />
          <ProductCard
            title="Vegetable Chow-mein"
            time={'20 minutes'}
            image={'https://www.recipetineats.com/wp-content/uploads/2023/07/Beef-chow-mein_5.jpg'}
          />
          <ProductCard
            title="Vegetable Pizza"
            time={'30 minutes'}
            image={'https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg'}
          />
        </Flex>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="option"
            rules={{ required: 'Please enter at least one food group.' }}
            render={({ field: { onChange, onBlur, value, name, ref }, fieldState: { error } }) => (
              <Select
                name={name}
                ref={ref}
                onChange={onChange}
                value={value}
                isInvalid={error?.message ? true : false}
                colorScheme="blue"
                options={options}
                placeholder={'Select the options'}
                closeMenuOnSelect={true}
                useBasicStyles
                isMulti
                // hideSelectedOptions
                // selectedOptionStyle="check"
                // selectedOptionColorScheme="red"
              />
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Container>
  );
};

export default RecipePage;

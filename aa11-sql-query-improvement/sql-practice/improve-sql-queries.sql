----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    -- Your code here 

-- Paste your results below (as a comment):
SELECT * FROM cats
WHERE name = "Vina"
.timer on
.index

EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE name = "Vina";
-- QUERY PLAN
-- `--SCAN cats
-- Run Time: real 0.001 user 0.000066 sys 0.000026


CREATE INDEX idx_cats_name ON cats (name, color, breed);

EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE name = "Vina";
-- QUERY PLAN
-- `--SEARCH cats USING COVERING INDEX idx_cats_name (name=?)
-- Run Time: real 0.001 user 0.000239 sys 0.000143

-- sqlite> .index
-- idx_cats_name


----------
-- Step 1 - Analyze the Query
----------
-- Query:

    -- Your code here 

-- Paste your results below (as a comment):


-- What do your results mean?

    -- Was this a SEARCH or SCAN?


    -- What does that mean?




----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 

-- Paste your results below (as a comment):




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    -- Your code here 

-- Analyze Query:
    -- Your code here 

-- Paste your results below (as a comment):


-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    -- Your code here 

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------
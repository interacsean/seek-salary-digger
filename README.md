# Seek.com.au salary digger

Job Search site, seek.com.au, often doesn't show the salaries associated with job search results.  However, there is always a salary range for each job posting.

This tool searches for a search term for salary ranges in increments of $10,000, from $50-200k, to get a picture of the remuneration available for jobs matching particular a search.

```
npm run dig -- "marine-biologist" "all-Sydney-NSW"
```

Note the first argument is the search term, as it appears in the URL of a seek.com.au search.  (Spaces are converted to hyphens.) 

The second argument in the location as it appears in the URL of a seek.com.au search.  (If omitted, defaults to Sydney.)
